---
tags: 
aliases:
  - ej background alien invasion (pcc)
tipo: 📑
referencia: "[[🏛️python crash course(3e684)]]"
tema:
  - python
  - pygame
---

#nota/📑


del ejemplo de [[📑crear ventana pygame (pcc)|crear ventana pygame]] se cambia el fondo.
[[📑background (pcc)|background color]]

```python
import sys
import pygame 

class AlienInvasion:
    """Manejar el juego en general"""

    def __init__(self):
        """inicializar el juego"""
        pygame.init() ## inicializa las funciones de pygame

        self.bg_color = (200,200,200)

        self.screen = pygame.display.set_mode((1200,800)) 
        pygame.display.set_caption("Alien Invasion") 

    def run_game(self):
        """ciclo general del juego """
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    sys.exit()
            """mostrar ventanas """
            self.screen.fill(self.bg_color)
            pygame.display.flip()


if __name__ == '__main__':
    ai = AlienInvasion()
    ai.run_game()

```