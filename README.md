#Sorting Algorithm Visualizer

##Objects:
Teach students about sorting algorithms and their respecitves runtimes, across arrangements of data.
Visualize sorting algorithms in a fun, and informative manner.
Entise students to continue learning by presenting them with a fun interactive UI.

##Tech stack:
Backend: Pyhton
Frontend: React + NextJS
Platform: Supabase

##Startup:

Prequesites- 

1. pip, and npm are installed on your machine with:
``` Bash
    pip -v
    npm -v
```
2. Setup supabase

Install-

After forking this repository.
Open two terminals.

Run this in both in not already in the follow directory "Sorting-Algorithm-Visualizer":
```Bash
    cd Sorting-Algorithm-Visualizer
```
Before running any more commands located the .local.env file in the client folder.
Place inside of file a alter where needed:
``` Bash
NEXT_PUBLIC_API_URL=5000
NEXT_PUBLIC_SUPABASE_URL=yoururl
NEXT_PUBLIC_SUPABASE_ANON_KEY=yourkey
FLASK_ENV=development
```

In one terminal run:
``` Bash
    cd client
    npm run dev
```
In the other terminal:
``` Bash
    cd server
    python run.py
```