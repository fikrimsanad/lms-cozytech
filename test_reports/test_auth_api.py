"""
NextAuth Credentials Authentication API Tests
Tests for LMS CozyTech Next.js 16 app with NextAuth v5

Test Credentials:
- Admin: admin@mail.com / 123456 (role: admin)
- Student: user@mail.com / 123456 (role: student)
"""

import pytest
import requests

BASE_URL = "http://localhost:3000"


class TestAuthEndpoints:
    """Test NextAuth API endpoints"""

    def test_csrf_endpoint_returns_token(self):
        """GET /api/auth/csrf should return a CSRF token"""
        response = requests.get(f"{BASE_URL}/api/auth/csrf")
        assert response.status_code == 200
        data = response.json()
        assert "csrfToken" in data
        assert len(data["csrfToken"]) > 0
        print(f"✓ CSRF token received: {data['csrfToken'][:20]}...")

    def test_providers_endpoint_returns_credentials(self):
        """GET /api/auth/providers should return credentials provider"""
        response = requests.get(f"{BASE_URL}/api/auth/providers")
        assert response.status_code == 200
        data = response.json()
        assert "credentials" in data
        assert data["credentials"]["name"] == "credentials"
        assert data["credentials"]["type"] == "credentials"
        print("✓ Credentials provider configured correctly")

    def test_session_endpoint_returns_null_when_not_logged_in(self):
        """GET /api/auth/session should return null when not authenticated"""
        response = requests.get(f"{BASE_URL}/api/auth/session")
        assert response.status_code == 200
        # NextAuth returns null or empty object when not logged in
        data = response.json()
        assert data is None or data == {} or "user" not in data
        print("✓ Session returns null/empty when not authenticated")


class TestAdminLogin:
    """Test admin login flow"""

    @pytest.fixture
    def admin_session(self):
        """Login as admin and return session with cookies"""
        session = requests.Session()
        
        # Get CSRF token
        csrf_response = session.get(f"{BASE_URL}/api/auth/csrf")
        csrf_token = csrf_response.json()["csrfToken"]
        
        # Login
        login_response = session.post(
            f"{BASE_URL}/api/auth/callback/credentials",
            data={
                "csrfToken": csrf_token,
                "email": "admin@mail.com",
                "password": "123456"
            },
            allow_redirects=False
        )
        
        return session

    def test_admin_login_success(self, admin_session):
        """Admin login should succeed and create session"""
        session_response = admin_session.get(f"{BASE_URL}/api/auth/session")
        assert session_response.status_code == 200
        data = session_response.json()
        
        assert "user" in data
        assert data["user"]["email"] == "admin@mail.com"
        assert data["user"]["name"] == "Admin"
        assert data["user"]["role"] == "admin"
        assert "id" in data["user"]
        print(f"✓ Admin login successful: {data['user']}")

    def test_admin_session_contains_required_fields(self, admin_session):
        """Admin session should contain name, email, role, id"""
        session_response = admin_session.get(f"{BASE_URL}/api/auth/session")
        data = session_response.json()
        
        required_fields = ["name", "email", "role", "id"]
        for field in required_fields:
            assert field in data["user"], f"Missing field: {field}"
        print(f"✓ Session contains all required fields: {required_fields}")


class TestStudentLogin:
    """Test student login flow"""

    @pytest.fixture
    def student_session(self):
        """Login as student and return session with cookies"""
        session = requests.Session()
        
        # Get CSRF token
        csrf_response = session.get(f"{BASE_URL}/api/auth/csrf")
        csrf_token = csrf_response.json()["csrfToken"]
        
        # Login
        login_response = session.post(
            f"{BASE_URL}/api/auth/callback/credentials",
            data={
                "csrfToken": csrf_token,
                "email": "user@mail.com",
                "password": "123456"
            },
            allow_redirects=False
        )
        
        return session

    def test_student_login_success(self, student_session):
        """Student login should succeed and create session"""
        session_response = student_session.get(f"{BASE_URL}/api/auth/session")
        assert session_response.status_code == 200
        data = session_response.json()
        
        assert "user" in data
        assert data["user"]["email"] == "user@mail.com"
        assert data["user"]["name"] == "User"
        assert data["user"]["role"] == "student"
        print(f"✓ Student login successful: {data['user']}")


class TestInvalidLogin:
    """Test invalid login attempts"""

    def test_invalid_credentials_returns_error(self):
        """Invalid credentials should redirect with error"""
        session = requests.Session()
        
        # Get CSRF token
        csrf_response = session.get(f"{BASE_URL}/api/auth/csrf")
        csrf_token = csrf_response.json()["csrfToken"]
        
        # Attempt login with wrong credentials
        login_response = session.post(
            f"{BASE_URL}/api/auth/callback/credentials",
            data={
                "csrfToken": csrf_token,
                "email": "wrong@mail.com",
                "password": "wrongpassword"
            },
            allow_redirects=False
        )
        
        # Should redirect to login with error
        assert login_response.status_code == 302
        location = login_response.headers.get("location", "")
        assert "error=" in location
        print(f"✓ Invalid login redirects with error: {location}")

    def test_empty_credentials_returns_error(self):
        """Empty credentials should redirect with error"""
        session = requests.Session()
        
        # Get CSRF token
        csrf_response = session.get(f"{BASE_URL}/api/auth/csrf")
        csrf_token = csrf_response.json()["csrfToken"]
        
        # Attempt login with empty credentials
        login_response = session.post(
            f"{BASE_URL}/api/auth/callback/credentials",
            data={
                "csrfToken": csrf_token,
                "email": "",
                "password": ""
            },
            allow_redirects=False
        )
        
        # Should redirect to login with error
        assert login_response.status_code == 302
        location = login_response.headers.get("location", "")
        assert "error=" in location
        print(f"✓ Empty credentials redirects with error: {location}")


class TestSeedEndpoint:
    """Test seed endpoint"""

    def test_seed_endpoint_works(self):
        """POST /api/seed should seed database"""
        response = requests.post(f"{BASE_URL}/api/seed")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"✓ Seed endpoint works: {data['message']}")


class TestKelasEndpoint:
    """Test kelas API endpoint"""

    def test_get_kelas_returns_list(self):
        """GET /api/kelas should return list of classes"""
        response = requests.get(f"{BASE_URL}/api/kelas")
        assert response.status_code == 200
        data = response.json()
        # API returns {data: [...], page, total, totalPages}
        assert "data" in data
        assert isinstance(data["data"], list)
        print(f"✓ Kelas endpoint returns {len(data['data'])} classes")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
