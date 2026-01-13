1. AUTHENTICATION IMPLEMENTATION (STEP BY STEP)
    High-level flow:

    Register → Login → Get JWT → Access protected routes
                        ↓
                    Update / Delete Profile
2. Configure JWT & DRF:
    JWT auth middleware
    Protected routes by default
3. App structure:
        users/
    ├── serializers.py
    ├── views.py
    ├── urls.py
    ├── models.py

4. Created serializers - users/serializers.py
    Register Serializer
    User Profile Serializer
5. Views (Auth logic) -users/views.py
    Register API
    Update Profile (Protected)
    Delete Profile (Protected)
6. URLs (Auth endpoints) - users/urls.py
7. Connect users URLs to project - backend/urls.py
    Update profile	PUT /api/users/profile/update/	
    Delete profile	DELETE /api/users/profile/delete/	

8. TASK APIs:
    Logged-in User
    ├── Create task
    ├── See ONLY their tasks
    ├── Update ONLY their tasks
    └── Delete ONLY their tasks
    ## Layer	    Responsibility
        Model	    Data structure + constraints
        Serializer	Validation + data conversion
        View	    Business logic + permissions
        URL	        Routing

9. Created Task Serializer

---- Frontend_React

1. API helper (centralized JWT handling)
    src/api/axios.js
        No need to manually add headers every time
        Clean & reusable
        Matches industry practice

2. Auth Context (CORE PIECE)
    src/auth/AuthContext.js
    This solves:
        Token storage
        Login / logout
        Route protection

3. Wrap App with AuthProvider
    src/index.js