
<%*
// frontmatter
const tmn_hash = 6
const frontmatter = {
    nombre_nota: tp.file.title,
    tipo_nota: "🔌",
    hash: tp.user.hash(tmn_hash)
}

tR = tp.user.objetoAFrontmatter(frontmatter)
tR += "\n\n#nota/🏛️"
tR += `\n\n# ${frontmatter.tipo_nota}${frontmatter.nombre_nota}\n`
%>



<%tp.file.rename( `${frontmatter.tipo_nota}${frontmatter.nombre_nota} (${frontmatter.hash})`)%>