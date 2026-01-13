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

## FOLDER STRUCTURE
ozi_task_app/
├── .git/
├── .gitignore
├── Readme.md
│
├── backend/
│   ├── db.sqlite3
│   ├── manage.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   ├── wsgi.py
│   │   └── __pycache__/
│   ├── tasks/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   ├── migrations/
│   │   │   └── __init__.py
│   │   └── __pycache__/
│   └── users/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── tests.py
│       ├── urls.py
│       ├── views.py
│       ├── migrations/
│       │   └── __init__.py
│       └── __pycache__/
│
├── frontend/
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── index.js
│       ├── index.css
│       ├── App.js
│       ├── App.css
│       ├── App.test.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       ├── api/
│       │   └── axios.js
│       ├── auth/
│       │   └── AuthContext.js
│       ├── components/
│       │   └── ProtectedRoute.js
│       └── pages/
│           ├── Dashboard.js
│           ├── Login.js
│           ├── Profile.js
│           └── Register.js
│
└── django_env/
    ├── pyvenv.cfg
    ├── Include/
    ├── Lib/
    │   └── site-packages/
    │       ├── django/
    │       ├── rest_framework/
    │       ├── rest_framework_simplejwt/
    │       └── ... (other packages)
    └── Scripts/
        ├── activate
        ├── activate.bat
        └── Activate.ps1