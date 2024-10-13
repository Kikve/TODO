
function parseYAML  (yamlString)  {
    const lines = yamlString.split('\n');
    const result = {};
    let currentKey = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) { // Ignorar líneas vacías y comentarios
            if (trimmedLine.includes(':')) {
                // Manejar pares clave: valor
                const [key, value] = trimmedLine.split(':').map(item => item.trim());
                currentKey = key;
                result[currentKey] = value;
            } else if (currentKey) {
                // Manejar valores múltiples o anidados
                result[currentKey] += `\n${trimmedLine}`;
            }
        }
    }
    return result;
};



module.exports = parseYAML
