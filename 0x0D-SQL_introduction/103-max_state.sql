-- a script that displays the max temperature
SELECT state, MAX(value) as max_temp FROM temperatures
GROUP BY state ORDER BY state;
