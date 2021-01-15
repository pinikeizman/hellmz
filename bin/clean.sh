echo "Removing !"
rm -rf charts/
rm Chart.lock > /dev/null
helm dep build
