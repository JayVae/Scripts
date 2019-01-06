@echo off
del auth_action.php
echo by Jay
echo connecting...
rasdial 121 shihaijie0525 731400
wget http://10.6.8.2:902/include/auth_action.php --post-data="action=login&username=shihaijie0525&password=731400&ac_id=1&user_ip=&nas_ip=&user_mac=&save_me=1&ajax=1" 
pause