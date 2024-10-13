function objetoAFrontmatter(obj) { let frontmatterString = '---\n'; // Iniciar el frontmatter 
    for (const [key, value] of Object.entries(obj)) {
        frontmatterString += `${key}: ${typeof value === 'string' ? `"${value}"` : value}\n`; 
    } 
        
    frontmatterString += '---\n'; 
    return frontmatterString; 
}

module.exports = objetoAFrontmatter 
