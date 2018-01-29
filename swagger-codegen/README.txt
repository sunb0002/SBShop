swagger-codegen
===============
We are using swagger-codegen to auto-generate API and stubs for Angular. 
The prerequisite for generating API and stubs is swagger JSON 
(i.e. myord-swagger.json).

On the date of writing, the latest release version 2.2.2 of swagger-codegen 
contains bugs, it will not able to generate compile-able TypeScript files. 
As the workaroud, we are using the latest swagger-codegen from GitHub with 
commit ID SHA-1: bfae01cd35c068a3b0ccea581d17cd9e642f412b.

To re-generate API and stubs, just simply run the swagger-codegen.bat
