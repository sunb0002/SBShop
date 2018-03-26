rmdir /S /Q ..\src\app\shared\backend-api\sbshop
mkdir ..\src\app\shared\backend-api\sbshop

java -jar swagger-codegen-cli.jar generate -i emart-swagger.json -l typescript-angular -o ..\src\app\shared\backend-api\sbshop

