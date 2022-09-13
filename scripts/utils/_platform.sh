function check_os {
    printf "${blue}Checking OS...${reset}\n"
case `uname` in
  Linux )
     LINUX=1
    #  which yum && { echo "CentOS"; return; }
    #  which zypper && { echo "openSUSE"; return; }
     which apt-get && { printf "${green}Debian based${reset}\n"; let DISTRIB="debian"; }
     which pacman && { printf "${green}Arch based${reset}\n"; let DISTRIB="arch"; }
     ;;
  Darwin )
     DARWIN=1
     ;;
  * )
     # Handle AmigaOS, CPM, and modified cable modems.
     ;;
esac
}