@echo off
set dirUrl=F:\FFOutput\final\
@echo on
echo %dirUrl%
for /r . %%i in (*.aac) do echo %%i
for /r . %%i in (*.aac) do copy %%i F:\FFOutput\final
pause