rm -rf ..\src\app\shared\backend-api\sbshop
mkdir ..\src\app\shared\backend-api\sbshop

cd "$(dirname "$0")"

java -jar ./swagger-codegen-cli.jar generate -i http://localhost:8080/springdemo/v2/api-docs -l typescript-angular -o ../src/app/shared/backend-api/sbshop
