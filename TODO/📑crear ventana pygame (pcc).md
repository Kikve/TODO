---
tags: 
aliases:
  - crear ventana pygame
tipo: 📑
referencia: "[[🏛️python crash course(3e684)]]"
tema:
  - python
  - pygame
---

#nota/📑


# crear ventana pygame

### Palabras clave
[[📑surface(pcc)|surface]]
[[📑flip(pcc)|flip]]


### Contenido

Examplo para crear ventanas en pygame 

```python

import sys
import pygame 

class AlienInvasion:
    """Manejar el juego en general"""

    def __init__(self):
        """inicializar el juego"""
        pygame.init() ## inicializa las funciones de pygame
        self.screen = pygame.display.set_mode((1200,800)) #genera un surface



	pygame.display.set_caption("Alien Invasion") # titulo

    def run_game(self):
        """ciclo general del juego """
        while True: #eventos
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    sys.exit()
            """mostrar ventanas """
            pygame.display.flip() #mostrar ventana


if __name__ == '__main__':
    ai = AlienInvasion()
    ai.run_game()
```