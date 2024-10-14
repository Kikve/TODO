<%* 
const tmn_hash = 7
const nombre =  await tp.system.prompt("Nombre")

//  del frontmatter del padre
// --------------------------------------
let parent = {
    link: `[[${tp.file.path(true)}]]`,
    nombre_nota: tp.frontmatter["nombre_nota"],
    reduccion: tp.frontmatter["reduccion"],
    tipo_nota: "🏛️",
    hash: tp.frontmatter["hash"]
    }
// --------------------------------------

// frontmatter de la nueva nota
// -------------------------------------
let frontmatter = {
    nombre_nota: nombre,
    alias: [nombre],
    letras: parent.reduccion,
    referencias: parent.link, 
    tipo_nota: "📑",
    hash: tp.user.hash(tmn_hash),
    parent_hash: parent.hash
    
}
// -------------------------------------

let newFile = tp.user.objetoAFrontmatter(frontmatter)
// tag tipo de nota
newFile += "\n#nota/" + frontmatter.tipo_nota
// titulo
newFile += 
`\n\n# ${frontmatter.tipo_nota}${frontmatter.nombre_nota}\n`
// hashes ### <- ####
 newFile += `<div class="hash">(${frontmatter.hash})</div>`  

newFile += `\n\n- [ ] recordar  [start:: ${tp.date.now()}]\n`
await tp.file.create_new(newFile,
    `${frontmatter.tipo_nota}${nombre} (${parent.reduccion})`)

tR += ""
%>

