# AplicativosReactNative
Repositório destinado para estudo de aplicativos desenvolvidos em React Native

<h1>Preparar o ambiente de trabalho para React Native</h1>
<strong>1-</strong> Instalar JDK8

<strong>2-</strong> Instalar Android Studio e depois configurar as dependências do SDK

<strong>3-</strong> Configurar as váriaveis de ambiente <br>
<strong>Do usuário</strong> -> ANDROID_HOME -> %localappdata%\Android\Sdk <br>
<strong>Do sistema</strong> -> platform_tools -> %localappdata%\Android\Sdk\platform-tools <br>

<strong>4-</strong> Instalar SCRCPY

<strong>5-</strong> Configurar a CHAVE SSH no GitHub<br>
Depois de colocar e-mail no GitHub, ir para <br>
cd~/.ssh/ e depois cat no arquivo .pub<br>

<strong>6-</strong> Na pasta desejada, para iniciar um novo projeto React Native fazer:<br>
npm i -g create-react-native-native-app<br>
create-react-native-app NomeDoProjeto<br>

<strong>Ou então:</strong><br>
npx react-native init NomeDoProjeto<br>

<strong>7-</strong> Criar um repositório no GitHub e vincular com o projeto

<strong>8-</strong> Para iniciar o projeto React Native<br>
npm install<br>
npm start<br>
npm run android<br>

<strong>9-</strong> Para mudar de branch no GitHub:<br>
git checkout -B main<br>
git branch -M main<br>
git branch -D master<br>

<strong>10-</strong> Para subir o projeto para o GitHub:<br>
git add .<br>
git commit -m "commit"<br>
git push origin main<br>
