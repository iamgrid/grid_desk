@echo off

setlocal
set repo_folder="d:\User\grid_desk"
set /p currencylayertoken=<%repo_folder%\wget_fetchers\currency-layer-token.txt

set srcfile=%repo_folder%\fetched_data\exchange-rates.txt
set destfile=%repo_folder%\fetched_data\exchange-rates-actual.txt
set logfile=%repo_folder%\fetched_data\exchange-rates.log

set minbytesize=50

rem D:\User\wget.exe --no-check-certificate -O %srcfile% "https://api.exchangeratesapi.io/api/latest?base=HUF&symbols=EUR,USD,GBP"
D:\User\wget.exe --no-check-certificate -O %srcfile% "http://api.currencylayer.com/live?access_key=%currencylayertoken%&currencies=HUF,EUR,GBP"


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