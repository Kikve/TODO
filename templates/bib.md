

<%* 

const tmn_hash = 6;
// frontmatter
// --------------------------------------
const frontmatter = {
    tipo: "", 
    titulo: "", 
    autor: "",
    editorial: "",
    ano: "",
    url: "",
    nombre_nota: tp.file.title,
    reduccion: tp.user.reduce_name(tp.file.title),
    tipo_nota: "🏛️",
    hash: tp.user.hash(tmn_hash)
}
// --------------------------------------

tR = tp.user.objetoAFrontmatter(frontmatter)
// tag
tR += "\n\n#nota/🏛️"
// titulo
tR += `\n\n# ${frontmatter.tipo_nota}${frontmatter.nombre_nota}\n`
tR += `<div>(${frontmatter.hash})</div>\n\n`
tR += "\`\`\`" + "dataview\n"
tR += "table file.ctime, file.tasks.text from [[]] sort file.ctime desc\n\n"
tR += "\`\`\`\n"
%>


<%tp.file.rename( `${frontmatter.tipo_nota}${frontmatter.nombre_nota} (${frontmatter.hash})`)%>






