<h1 align="center">Shell Script Translator<br>(Shell to Natural Language and Natural Language to Shell)</h1>


## 🌟 Features

- Dark mode
- Lowercase/uppercase toggle
- Copy to clipboard

## 📖 How to use:

Using the Shell to Natural Language Translator is easy. Simply navigate to the tool's website and choose whether you want to translate from natural language to Shell or from Shell to natural language. Then, type in your query and hit the "translate" button. The tool will generate the corresponding code or text and display it on the screen. 
You can press the 'reverse' button to give input as Natural Language and get Shell queries in response


## 🛠️ Installation

### Local Development Environment

1. Clone the repository:

    ```bash
    git clone https://github.com/jschirad/shell-translator.git
    ```

2. Install the required packages:

    ```bash
    cd shell-translator
    npm install
    ```

3. Build the application:

    ```bash
    npm run build
    ```

4. Input your OPENAI API key in the .env file, you can get your API key [here](https://beta.openai.com/account/api-keys):

    ```bash
    OPENAI_API_KEY=$YOUR_API_KEY
    ```

5. Start the development server:

    ```bash
    npm start
    ```

### Docker Compose

1. Clone the repository:

    ```bash
    git clone https://github.com/jschirad/shell-translator.git
    ```

2. Input your OPENAI API key in the .env.production file, you can get your API key [here](https://beta.openai.com/account/api-keys):

    ```bash
    OPENAI_API_KEY=$YOUR_API_KEY
    ```

3. Start the development server:

    ```bash
    docker-compose up
    ```

## 🖥️ Usage

Once the development server is running, you can access the application by navigating to `http://localhost:3000` in your web browser.

Enter a natural language query in the input box and click "Translate" to generate the corresponding Shell code. The generated Shell code will be displayed in the output box.

## 👥 Contributing

The original project https://github.com/whoiskatrin/Shell-translator.git

Contributions to Shell Translator are welcome and encouraged! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Push your changes to your fork
5. Submit a pull request

## 📜 License

Shell Translator is released under the MIT [License](LICENSE).
