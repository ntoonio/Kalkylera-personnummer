# Kalkylera personnummer
Av någon anledning så har vi en extra siffra i våra personnummer. Det är den sista siffran, som är en _kontrollsiffra_ och kan räknas ut med hjälp av de andra 9 siffrorna.

Det finns ett interaktivt exempel [här](https://ntoonio.github.io/Kalkylera-personnummer) där du kan skriva in ditt eget personnummer

## Exempel
_640823-323X_

Multiplicera varje nummer i personnummret med varannan 2 och 1

	6	4	0	8	2	3	-	3	2	3	
	*	*	*	*	*	*		*	*	*
	2	1	2	1	2	1		2	1	2
	=	=	=	=	=	=		=	=	=
	12	4	0	8	4	3		6	2	6

Summera siffrorna var för sig

	1 + 2 + 4 + 0 + 8 + 4 + 3 + 6 + 2 + 6 = 36

Ta ut den sista siffran. Vi gör detta med modulus (%), vilket är resten efter division

	36 % 10 = 6

Konvertera den siffran från 10

	10 - 6 = 4

Kvar har du din kontrollsiffra

	4
