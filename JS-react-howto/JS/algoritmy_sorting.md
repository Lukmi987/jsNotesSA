https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms

Sorting is useful for quicker searching

JS sort modifies array-in-place and converts items to string and orders them alphabetically,
if compare function is not supplied

Default array.sort() implementation depends on JVM, Chrome, MOzilla, node.js can have different,
most of them seem to use quicksort

===========================================

Sorting algorithms:

SLOWER, NOT GOOD FOR LARGER ARRAYS:

1. selection sort - O(n2) - kvadratic, roste více než input (protože pro hledání první i druhé se prochází znovu ty stejné prvky v poli)
a) najít nejmenší a prohodit ji s prvním prvkem
b) najít druhé nejmenší a prohodit ji s druhým prvkem
c) atd.

2. insertion sort O(n2) - generally rychlejší než selection sort
místo prohazování (swaping) jde o vkládání jednotlivých prvků do už seřazených částí pole, 2 se vloží mezi 1 a 3 a pod.

------------

FASTER:

1. quicksort - log n in best and average cases, but kvadratic in worst cases
https://www.youtube.com/watch?v=Hoixgm4-P4M


2. merge sort - vždy O(log n)
involves divide-and-conquer paradigm (rozdělit na menší podcelky a rekurzivně vyřešit je - rekurzivní algoritmus)
pole se rozdělí na půlku, půlky na půlky, ty zase na půlky atd až zbydou jen dvojice, ty se seřadí a mergnou postupně zase zpět do jednoho, ale
už popořadě; seřazení se děje při mergování, při rozdělování se neděje nic
