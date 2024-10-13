---

kanban-plugin: board

---
<%*
let vault = app.vault
let path = "projectos"
const taskString = "- [ ] "
let result = ""
let files = vault.getMarkdownFiles()
//archivos filtrados 
let filtered = files.filter(x => x.path.startsWith(path))
let yamlsOfFiles = []

result += "---\n"
result += "kanban-plugin: board\n"
result += "---\n"
result += "#nota/📅\n"
result += "# Pendientes\n"
for (let [file_number,file]  of filtered.entries()){
	let contenido = await vault.read(file)
    
    if (contenido.startsWith('---')) { 
	    let frontmatterEnd = contenido.indexOf('---', 3); 
	    let frontmatterString = contenido.substring(3, frontmatterEnd); 
	    let frontmatterObject = tp.user.parseYaml(frontmatterString);
	    
		yamlsOfFiles.push(frontmatterObject)
		filtered[file_number]['frontmatter'] = frontmatterObject 
   }

	
}

const dia_numero_hoy = new Date().getDay().toString()
let projectos_activos = filtered.filter (
	(f) =>
	//revisar si nota se activa el dia de hoy
	f.frontmatter.dias_activos.includes(dia_numero_hoy) &&
	// revisar si esta activo en general
	f.frontmatter.estatus == 'activo'
	
)

for (projecto  of projectos_activos){
	let link = projecto.parent.path + projecto.basename
	let alias  = projecto.frontmatter.aliases[0]
	//console.log(projecto.frontmatter)
	let veces_al_dia = parseInt(projecto.frontmatter.veces_al_dia)
    for ( n in new Array(veces_al_dia).fill(0)){
    result = result + taskString + `[[${link}|${alias}]]` + '\n'
    }
}
result += "# Completados\n"  

result += "%% kanban:settings\n"
result += "```\n"
result += "{\"kanban-plugin\":\"board\",\"list-collapse\":[false,false]}\n"
result += "```\n"
result += "%%\n"

  //console.log(yamlsOfFiles) // front matter de cada archivo
  //console.log(files)
  return result
%>



%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false]}
```
%%
