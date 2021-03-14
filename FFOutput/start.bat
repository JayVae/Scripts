:: 以文件夹的名字对文件夹中的文件进行命名
@echo off
for /f "delims=" %%i in ('dir /ad/b/s "F:\FFOutput"') do echo %%~ni>>list.txt
for /r . %%i in (.) do (
	cd %%i
	ren *.aac "%%~ni".aac
)
pause