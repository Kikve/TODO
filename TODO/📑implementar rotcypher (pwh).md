---
tipo_nota: 📑
tags: 
aliases:
  - implementar rotcypher
referencia: "[[🏛️programing with haskell (54dd4)]]"
tema:
  - haskell
---

#nota/📑


# implementar rotcypher

### Palabras clave

[[📑ROT13 (pwh)|ROT13]]


### Contenido

Se puede usuar [[🔌fromEnum]] para convertir a Ints, y desdepues regresarlos usando una suma. 

Se define un alfabeto 

```haskell
data FourLetterAlphabet = L1 | L2 | L3 | L4 deriving (Show,Enum,Bounded)
```

rotN, toma un numero $n$  el tamano del alfabeto y un Char de algun abecedario . Y retorna  la letra rotada con el mimo tipo de el alfabeto. 

el Char debe implemente clases [[🔌Enum]] y Bounded

```haskell
rotN :: (Bounded a, Enum a) => Int -> a -> a
rotN alphabetSize c = toEnum rotation
     where halfAlphabet = alphabetSize `div` 2
           offset = fromEnum c + halfAlphabet
           rotation = mod offset  alphabetSize

```

Se define el metodos para un tipo especifico
```haskell
rotChar :: Char -> Char
rotChar charToEncrypt = rotN sizeOfAlphabet charToEncrypt
	where sizeOfAlphabet = 1 + fromEnum (maxBound :: Char)
```

```haskell
rot4l :: FourLetterAlphabet -> FourLetterAlphabet
rot4l char = rotN alphaSize char
    where alphaSize = fromEnum (maxBound :: FourLetterAlphabet) + 1
```



una funcion para aplicarlo en un string de el alfabeto  
```haskell
fourLetterEncoder :: [FourLetterAlphabet] -> [FourLetterAlphabet]
fourLetterEncoder vals = map rot4l vals
```