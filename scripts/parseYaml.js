




function parseYAML  (yamlString)  {
    const lines = yamlString.split('\n');
    const result = {};
    let currentKey = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        // console.log(trimmedLine)
        if (trimmedLine && !trimmedLine.startsWith('#')) { // Ignorar líneas vacías y comentarios
            if (trimmedLine.includes(':')) {
                // Manejar pares clave: valor
                const [key, value] = trimmedLine.split(':').map(item => item.trim());
                currentKey = key;
                result[currentKey] = value;
            } else if (currentKey) {
                let  value = trimmedLine.split("-")[1].trim()

                if (!Array.isArray(result[currentKey])){
                   
                   result[currentKey ] = [value]
                }else{
                    result[currentKey].push(value)
                }
            }
        }
    }
    return result;
};



module.exports = parseYAML
