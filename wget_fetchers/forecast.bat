@echo off
rem Paks:
D:\User\wget.exe --no-check-certificate -O d:\User\grid_desk\fetched_data\weather.txt "https://api.openweathermap.org/data/2.5/forecast?lat=46.622047&lon=18.855918&units=metric&appid=47bb5d4c8c13479e5fddf7778605a7b9"
rem French Alps:
rem D:\User\wget.exe --no-check-certificate -O d:\User\grid_desk\fetched_data\weather.txt "https://api.openweathermap.org/data/2.5/forecast?lat=47&lon=6&units=metric&appid=47bb5d4c8c13479e5fddf7778605a7b9"
rem NYC:
rem D:\User\wget.exe --no-check-certificate -O d:\User\grid_desk\fetched_data\weather.txt "https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-73.98&units=metric&appid=47bb5d4c8c13479e5fddf7778605a7b9"
rem Dublin:
rem D:\User\wget.exe --no-check-certificate -O d:\User\grid_desk\fetched_data\weather.txt "https://api.openweathermap.org/data/2.5/forecast?lat=53.34&lon=-6.26&units=metric&appid=47bb5d4c8c13479e5fddf7778605a7b9"
rem Botswana:
rem D:\User\wget.exe --no-check-certificate -O d:\User\grid_desk\fetched_data\weather.txt "https://api.openweathermap.org/data/2.5/forecast?lat=-24.63&lon=25.90&units=metric&appid=47bb5d4c8c13479e5fddf7778605a7b9"

setlocal
set srcfile=d:\User\grid_desk\fetched_data\weather.txt
set destfile=d:\User\grid_desk\fetched_data\weather-actual.txt
set logfile=d:\User\grid_desk\fetched_data\weather.log
set minbytesize=10000

time /t>>%logfile%

call :setsize %srcfile%

if %size% GTR %minbytesize% (
    echo weather.txt is greater than %minbytesize% bytes, copying to weather-actual.txt>>%logfile%
    copy %srcfile% %destfile%>>%logfile%
) else (
    echo weather.txt is less than %minbytesize% bytes>>%logfile%
)
goto :eof

:setsize
set size=%~z1
goto :eof