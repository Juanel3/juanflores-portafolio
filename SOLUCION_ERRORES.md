# Solución de Errores de npm

## Problema: Error EPERM con npm

Si encuentras errores de permisos al ejecutar npm, aquí hay varias soluciones:

### Solución 1: Usar npx directamente (Recomendado)

Puedes ejecutar Next.js directamente con npx sin necesidad de instalar dependencias globalmente:

```bash
npx next dev
```

### Solución 2: Reparar permisos de npm

Ejecuta estos comandos para reparar los permisos:

```bash
# Opción A: Usar sudo (requiere contraseña)
sudo npm install

# Opción B: Cambiar el directorio de npm
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Solución 3: Usar un gestor de versiones de Node

Instala `nvm` (Node Version Manager) para gestionar versiones de Node.js:

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reiniciar terminal y luego:
nvm install 20
nvm use 20
npm install
```

### Solución 4: Usar Yarn como alternativa

```bash
# Instalar Yarn
npm install -g yarn

# O con Homebrew en macOS:
brew install yarn

# Luego usar yarn en lugar de npm:
yarn install
yarn dev
```

### Solución 5: Usar pnpm como alternativa

```bash
# Instalar pnpm
npm install -g pnpm

# O con Homebrew:
brew install pnpm

# Luego usar pnpm:
pnpm install
pnpm dev
```

## Verificar la instalación

Después de aplicar una solución, verifica que todo funciona:

```bash
npm --version
node --version
```

Si el problema persiste, intenta ejecutar el proyecto directamente con:

```bash
npx next dev
```

Esto descargará Next.js temporalmente y ejecutará el servidor de desarrollo.


