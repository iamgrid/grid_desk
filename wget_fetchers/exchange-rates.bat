@echo off
D:\User\wget.exe --no-check-certificate -O d:\User\grid_desk\fetched_data\exchange-rates.txt "https://api.exchangeratesapi.io/api/latest?base=HUF&symbols=EUR,USD,GBP"

setlocal
set srcfile=d:\User\grid_desk\fetched_data\exchange-rates.txt
set destfile=d:\User\grid_desk\fetched_data\exchange-rates-actual.txt
set logfile=d:\User\grid_desk\fetched_data\exchange-rates.log
set minbytesize=50

time /t>>%logfile%

call :setsize %srcfile%

if %size% GTR %minbytesize% (
    echo exchange-rates.txt is greater than %minbytesize% bytes, copying to exchange-rates-actual.txt>>%logfile%
    copy %srcfile% %destfile%>>%logfile%
) else (
    echo exchange-rates.txt is less than %minbytesize% bytes>>%logfile%
)
goto :eof

:setsize
set size=%~z1
goto :eof