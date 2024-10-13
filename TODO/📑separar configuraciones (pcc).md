---
tags: 
aliases:
  - separar configuraciones (pcc)
tipo: 📑
referencia: "[[🏛️python crash course(3e684)]]"
tema:
  - python
  - pygame
---

#nota/📑

En el ejemplo basico  de[[📑crear ventana pygame (pcc)|crear ventana pygame]]  se  separa en dos archivos para tener configuraciones 

[[📑background (pcc)|background color]]
[[📑crear ventana pygame (pcc)|crear ventana pygame]]

**settings.py***
```python
class Settings:
    """Configuraciones del juego"""

    def __init__(self):
        self.screensize = (1200, 800)
```
**alieninvasion.py**
```python

import sys
import pygame 

from settings import Settings

class AlienInvasion:
    """Manejar el juego en general"""

    def __init__(self):
        """inicializar el juego"""
        pygame.init() ## inicializa las funciones de pygame

        self.settings = Settings()
        # self.bg_color = (200,200,200)

        self.screen = pygame.display.set_mode(self.settings.screensize)
        pygame.display.set_caption("Alien Invasion") 

    def run_game(self):
        """ciclo general del juego """
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    sys.exit()
            """mostrar ventanas """
            self.screen.fill(self.settings.backgroundColor)
            pygame.display.flip()


if __name__ == '__main__':
    ai = AlienInvasion()
    ai.run_game()
```





