write('ok this is working').
color(red).
color(green).
color(blue).
color(yellow).

neighbor(StateAColor, StateBColor) :- color(StateAColor), 
  color(StateBColor), 
	StateAColor \= StateBColor. /* \= is the not equal operator */

graph(SA, SB, SC, SD, SE):- 
	neighbor(SA, SB), 
	neighbor(SA,SC), 
	neighbor(SA,SE),
	neighbor(SB, SE),
	neighbor(SB, SD), 
	neighbor(SC, SE), 
	neighbor(SC, SD).
