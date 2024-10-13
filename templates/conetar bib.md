<%* 
const pathTemplate = "templates/info.md"
let files = app.vault.getMarkdownFiles()
let title = tp.file.path(true) 
const key = tp.user.getKey(title)
let nombre =  await tp.system.prompt("Nombre")

let filteredFiles = files.filter(x => x.path == pathTemplate)

	if (filteredFiles.length != 1 ){
		tp.system.prompt("el template no existe")
	}else{
	   
		let reduced_name = tp.user.reduce_name(tp.frontmatter.nombre_nota)
		await tp.file.create_new(filteredFiles[0], `${nombre} (${reduced_name})`)
		
	} 

%>