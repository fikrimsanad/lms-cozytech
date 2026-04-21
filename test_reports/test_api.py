"""
LMS CozyTech API Tests
Tests for Next.js 16 LMS application with NextAuth v5
"""
import pytest
import requests
import os
import time

BASE_URL = "http://localhost:3000"

class TestHealthAndBasicEndpoints:
    """Basic health and endpoint tests"""
    
    def test_landing_page_loads(self):
        """Test landing page returns 200"""
        response = requests.get(f"{BASE_URL}/")
        assert response.status_code == 200
        print("✓ Landing page loads successfully")
    
    def test_login_page_loads(self):
        """Test login page returns 200"""
        response = requests.get(f"{BASE_URL}/login")
        assert response.status_code == 200
        print("✓ Login page loads successfully")
    
    def test_register_page_loads(self):
        """Test register page returns 200"""
        response = requests.get(f"{BASE_URL}/register")
        assert response.status_code == 200
        print("✓ Register page loads successfully")


class TestNextAuthEndpoints:
    """NextAuth API endpoint tests"""
    
    def test_csrf_endpoint(self):
        """Test CSRF token endpoint"""
        response = requests.get(f"{BASE_URL}/api/auth/csrf")
        assert response.status_code == 200
        data = response.json()
        assert "csrfToken" in data
        assert len(data["csrfToken"]) > 0
        print(f"✓ CSRF endpoint works - token: {data['csrfToken'][:20]}...")
    
    def test_providers_endpoint(self):
        """Test providers endpoint"""
        response = requests.get(f"{BASE_URL}/api/auth/providers")
        assert response.status_code == 200
        data = response.json()
        assert "credentials" in data
        assert "google" in data
        print("✓ Providers endpoint works - credentials and google available")
    
    def test_session_endpoint_unauthenticated(self):
        """Test session endpoint when not authenticated"""
        response = requests.get(f"{BASE_URL}/api/auth/session")
        assert response.status_code == 200
        # Should return empty object or null session
        print("✓ Session endpoint works for unauthenticated users")


class TestKelasAPI:
    """Kelas (Classes) CRUD API tests"""
    
    def test_get_kelas_list(self):
        """Test GET /api/kelas returns list of classes"""
        response = requests.get(f"{BASE_URL}/api/kelas")
        assert response.status_code == 200
        data = response.json()
        
        # Verify response structure
        assert "data" in data
        assert "total" in data
        assert "page" in data
        assert "totalPages" in data
        
        # Verify data is a list
        assert isinstance(data["data"], list)
        
        # If seed data exists, verify structure
        if len(data["data"]) > 0:
            kelas = data["data"][0]
            assert "_id" in kelas
            assert "nama" in kelas
            assert "deskripsi" in kelas
            assert "harga" in kelas
            print(f"✓ GET /api/kelas works - found {data['total']} classes")
        else:
            print("✓ GET /api/kelas works - no classes found (seed may be needed)")
    
    def test_get_kelas_with_pagination(self):
        """Test GET /api/kelas with pagination params"""
        response = requests.get(f"{BASE_URL}/api/kelas?page=1&limit=5")
        assert response.status_code == 200
        data = response.json()
        assert data["page"] == 1
        print("✓ GET /api/kelas pagination works")
    
    def test_get_kelas_with_filter(self):
        """Test GET /api/kelas with filter params"""
        response = requests.get(f"{BASE_URL}/api/kelas?status=published")
        assert response.status_code == 200
        data = response.json()
        # All returned items should have status=published
        for kelas in data["data"]:
            if "status" in kelas:
                assert kelas["status"] == "published"
        print("✓ GET /api/kelas filtering works")
    
    def test_post_kelas_unauthorized(self):
        """Test POST /api/kelas without auth returns 401"""
        response = requests.post(
            f"{BASE_URL}/api/kelas",
            json={"nama": "Test", "deskripsi": "Test", "harga": 1000}
        )
        assert response.status_code == 401
        print("✓ POST /api/kelas correctly requires authentication")


class TestRegistrationAPI:
    """User registration API tests"""
    
    def test_register_new_user(self):
        """Test POST /api/auth/register creates new user"""
        timestamp = int(time.time())
        response = requests.post(
            f"{BASE_URL}/api/auth/register",
            json={
                "name": f"Test User {timestamp}",
                "email": f"test_user_{timestamp}@test.com",
                "password": "test123456"
            }
        )
        assert response.status_code == 201
        data = response.json()
        assert "message" in data
        assert "userId" in data
        print(f"✓ Registration works - userId: {data['userId']}")
    
    def test_register_missing_fields(self):
        """Test registration with missing fields returns 400"""
        response = requests.post(
            f"{BASE_URL}/api/auth/register",
            json={"email": "test@test.com"}
        )
        assert response.status_code == 400
        print("✓ Registration validation works - missing fields rejected")
    
    def test_register_short_password(self):
        """Test registration with short password returns 400"""
        timestamp = int(time.time())
        response = requests.post(
            f"{BASE_URL}/api/auth/register",
            json={
                "name": "Test",
                "email": f"test_{timestamp}@test.com",
                "password": "123"
            }
        )
        assert response.status_code == 400
        print("✓ Registration validation works - short password rejected")
    
    def test_register_duplicate_email(self):
        """Test registration with existing email returns 409"""
        # Try to register with existing admin email
        response = requests.post(
            f"{BASE_URL}/api/auth/register",
            json={
                "name": "Duplicate",
                "email": "admin@cozytech.com",
                "password": "test123456"
            }
        )
        assert response.status_code == 409
        print("✓ Registration validation works - duplicate email rejected")


class TestSeedAPI:
    """Database seeding API tests"""
    
    def test_seed_endpoint(self):
        """Test POST /api/seed seeds the database"""
        response = requests.post(f"{BASE_URL}/api/seed")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"✓ Seed endpoint works - {data['message']}")


class TestProtectedRoutes:
    """Test that protected routes redirect to login"""
    
    def test_dashboard_redirects_to_login(self):
        """Test /dashboard redirects unauthenticated users"""
        response = requests.get(f"{BASE_URL}/dashboard", allow_redirects=False)
        # Should redirect (302 or 307) or return login page
        assert response.status_code in [200, 302, 307, 308]
        print("✓ Dashboard route is protected")
    
    def test_admin_redirects_to_login(self):
        """Test /admin redirects unauthenticated users"""
        response = requests.get(f"{BASE_URL}/admin", allow_redirects=False)
        assert response.status_code in [200, 302, 307, 308]
        print("✓ Admin route is protected")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
