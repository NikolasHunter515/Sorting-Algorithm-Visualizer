from app import create_app

app = create_app()

#just some generic code for testing the structure.
if __name__ == "__main__":
    app.run(debug=True, port=5000)
