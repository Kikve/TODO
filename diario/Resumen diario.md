
```dataview
TABLE nombre ,estatus, veces_al_dia, length(file.outlink) from "projectos"
```

<%+ tp.file.title %>

```tracker
searchType: fileMeta, fileMeta
searchTarget: cDate, size
xDataset: 0
line:
    fillGap: true
    yAxisLabel: Filesize
    yAxisUnit: bytes
```
```tracker
searchType: tag
searchTarget: nota, tipo
folder: 'TODO'

pie:
    data: '{{sum(dataset(0))}}, {{sum(dataset(1))}}'
    dataColor: '#4daf4a,#377eb8'
    label: Office, Home
    ratioInnerRadius: 0.3
```

```dataview
table   from "TODO" group by file.folder

```
## informacion de Hoy
```dataview
table    length(file.inlinks), length(file.outlinks) as links , file.frontmatter.tema
from "" 
where  file.cday = date(today) and contains(file.tags,  "nota")  
```



```dataview
task group by file.link
```

```dataviewjs
let current = dv.current()
let habitos = []
let result = []

let notas = dv.pages('"diario/notas"')
for ( let archivo of notas){

	let tasks = archivo.file.tasks
    let fecha = archivo.file.name	
	let pendiente = tasks.where(t => t.section.subpath == 'pendiente')
	let completado = tasks.where(t => t.section.subpath == 'completado')
	let habitos_en_archivo = tasks.text.filter((elmt,index) => {
			return index === tasks.text.indexOf(elmt)
			})	
	
	for (let element of habitos_en_archivo){
		if (habitos.includes(element) == false)  {
			habitos.push(element)
		
		}
	}

    for (let element of habitos_en_archivo){
    }
    
	dv.el('b', habitos)
}


let pages = dv.page("diario/notas/2024-09-30.md").file.tasks.where(t => t.section.subpath == 'pendiente').text
     //.where(x => x == '2024-09-30 > pendiente' )
let hasskell = dv.page("clase_haskell.md")
//dv.el('b',notas)
```


 