# Fork de fdroiddata

1. Ve a https://gitlab.com/fdroid/fdroiddata
2. Haz clic en el botón "Fork" en la esquina superior derecha
3. Selecciona tu cuenta como destino del fork

# Clonar tu fork localmente

```bash
git clone https://gitlab.com/TU_USUARIO/fdroiddata.git
cd fdroiddata
```

# Copiar el archivo de metadatos

1. Copia el archivo `metadata/com.whaticook.app.yml` de tu proyecto a la carpeta `metadata` del repositorio fdroiddata:
   - Ubicación origen: `c:\Users\Matias\Desktop\WhatIcook\metadata\com.whaticook.app.yml`
   - Ubicación destino: `/metadata/com.whaticook.app.yml` en el repositorio fdroiddata

# Crear un Merge Request

1. Haz commit de los cambios:
```bash
git add metadata/com.whaticook.app.yml
git commit -m "Add WhatIcook app"
git push origin main
```

2. Ve a https://gitlab.com/fdroid/fdroiddata
3. Haz clic en "Merge Requests" -> "New Merge Request"
4. Selecciona tu fork como source branch y fdroiddata/master como target branch
5. Completa la descripción del Merge Request incluyendo:
   - Breve descripción de la app
   - URL del código fuente
   - Confirma que la app cumple con los requisitos de F-Droid