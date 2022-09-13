#!/bin/bash
# Internet related functions (network check, downloading files, etc.)

check_internet() {
    # Credit to <https://stackoverflow.com/questions/17291233/how-can-i-check-internet-access-using-a-bash-script-on-linux>
    printf "${blue}Checking for internet...${reset}\n"
    wget -q --tries=10 --timeout=20 --spider http://github.com
    if [[ $? -eq 0 ]]; then
        printf "${green}Online${reset}\n"
    else
        printf "${red}Offline! Please check internet connection and try again...${reset}\n"
        return 1
    fi
}

install_packages() {
    printf "${blue}Installing packages...${reset}\n"
    # TODO: Add RedHat and Fedora support
    case $DISTRIB in
    debian) 
        printf "${blue}Installing required packages to compile website on Debian...${reset}\n"
        # build-essential - GCC/G++
        # ruby-full - Ruby
        sudo apt-get update && sudo apt-get install build-essential ruby-full make git # Debian and Ubuntu use same package manager :)
        printf "${yellow}Verifying installation before moving on to gems...${reset}\n"
        ruby -v 
        gcc -v 
        g++ -v 
        make -v 
        printf "${blue}Installing ruby gems${reset}\n"
        git clone --recursive https://github.com/rubygems/rubygems
        cd rubygems
        ruby setup.rb
        ruby -v
        success
        ;;
    arch)
        echo "Installing required packages to compile xbrew on Arch..."
        # sudo pacman -Syy && sudo pacman -S gcc make 
        echo "Checking installed packages..."
        gcc -v
        make -v
        ;;
    darwin)
        echo "Installing required packages to compile xbrew on MacOSX..."
        # Never used mac, someone elses problem lol
        gcc -v
        make -v
        echo "Not implemented yet!!"
        ;;
    esac
}
