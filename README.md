# Node REST Endpoint

Live sample on AWS http://ec2-34-204-247-182.compute-1.amazonaws.com:8181/api-docs/

## Run Locally
<pre>
Johns-MBP:node-utilities admin$ nodemon --inspect server.js
</pre>

## Build Docker container
<pre>
docker build -t node_rest_service . -f ./docker/Dockerfile
</pre>

## Run Docker container
Below shows how to inject environment variables into to the Docker instance
<pre>
docker run --env DATASOURCE_URL=172.17.0.2 --env DATASOURCE_USERNAME=username --env DATASOURCE_PASSWORD=password --env DATASOURCE_DATABASE=rental --env PORT=8181 -p 8181:8181 --name node_rest_service node_rest_service

</pre>

## Navigate to Swagger Docs
<pre>
http://localhost:8181/api-docs/
</pre>
![Alt text](./images/image-004.jpg?raw=true "Swagger Docs")

## To Debug NodeJS
![Alt text](./images/image-002.jpg?raw=true "Step 01")
![Alt text](./images/image-001.jpg?raw=true "Step 02")
![Alt text](./images/image-003.jpg?raw=true "Step 03")

## Setup Cron Job
<pre>
root@ip-172-31-61-12:/home/ubuntu/GitHub/ring-videos-to-aws-s3# apt-get install cron
Reading package lists... Done
Building dependency tree       
Reading state information... Done
cron is already the newest version (3.0pl1-128ubuntu2).
The following packages were automatically installed and are no longer required:
  linux-aws-headers-4.4.0-1072 linux-aws-headers-4.4.0-1074 linux-aws-headers-4.4.0-1075 linux-aws-headers-4.4.0-1077 linux-aws-headers-4.4.0-1079 linux-aws-headers-4.4.0-1083 linux-aws-headers-4.4.0-1084 linux-aws-headers-4.4.0-1085
  linux-aws-headers-4.4.0-1087 linux-aws-headers-4.4.0-1088 linux-headers-4.4.0-1072-aws linux-headers-4.4.0-1074-aws linux-headers-4.4.0-1075-aws linux-headers-4.4.0-1077-aws linux-headers-4.4.0-1079-aws linux-headers-4.4.0-1083-aws
  linux-headers-4.4.0-1084-aws linux-headers-4.4.0-1085-aws linux-headers-4.4.0-1087-aws linux-headers-4.4.0-1088-aws linux-image-4.4.0-1072-aws linux-image-4.4.0-1074-aws linux-image-4.4.0-1075-aws linux-image-4.4.0-1077-aws
  linux-image-4.4.0-1079-aws linux-image-4.4.0-1083-aws linux-image-4.4.0-1084-aws linux-image-4.4.0-1085-aws linux-image-4.4.0-1087-aws linux-image-4.4.0-1088-aws linux-modules-4.4.0-1077-aws linux-modules-4.4.0-1079-aws
  linux-modules-4.4.0-1083-aws linux-modules-4.4.0-1084-aws linux-modules-4.4.0-1085-aws linux-modules-4.4.0-1087-aws linux-modules-4.4.0-1088-aws
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 85 not upgraded.
root@ip-172-31-61-12:/home/ubuntu/GitHub/ring-videos-to-aws-s3# service cron start
root@ip-172-31-61-12:/home/ubuntu/GitHub/ring-videos-to-aws-s3# service cron status
● cron.service - Regular background program processing daemon
   Loaded: loaded (/lib/systemd/system/cron.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2018-10-24 13:05:58 UTC; 10 months 17 days ago
     Docs: man:cron(8)
 Main PID: 1093 (cron)
    Tasks: 1
   Memory: 6.6M
      CPU: 3min 47.326s
   CGroup: /system.slice/cron.service
           └─1093 /usr/sbin/cron -f

Sep 11 15:17:01 ip-172-31-61-12 CRON[9600]: pam_unix(cron:session): session opened for user root by (uid=0)
Sep 11 15:17:01 ip-172-31-61-12 CRON[9601]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
Sep 11 15:17:01 ip-172-31-61-12 CRON[9600]: pam_unix(cron:session): session closed for user root
Sep 11 16:17:01 ip-172-31-61-12 CRON[10021]: pam_unix(cron:session): session opened for user root by (uid=0)
Sep 11 16:17:01 ip-172-31-61-12 CRON[10022]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
Sep 11 16:17:01 ip-172-31-61-12 CRON[10021]: pam_unix(cron:session): session closed for user root
Sep 11 17:17:01 ip-172-31-61-12 CRON[10120]: pam_unix(cron:session): session opened for user root by (uid=0)
Sep 11 17:17:01 ip-172-31-61-12 CRON[10121]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)
Sep 11 17:17:01 ip-172-31-61-12 CRON[10120]: pam_unix(cron:session): session closed for user root
Sep 11 17:54:53 ip-172-31-61-12 systemd[1]: Started Regular background program processing daemon.

root@ip-172-31-61-12:/home/ubuntu/GitHub/ring-videos-to-aws-s3# crontab -e
no crontab for root - using an empty one

Select an editor.  To change later, run 'select-editor'.
  1. /bin/ed
  2. /bin/nano        <---- easiest
  3. /usr/bin/vim.basic
  4. /usr/bin/vim.tiny

Choose 1-4 [2]: 2
crontab: installing new crontab
# Edit this file to introduce tasks to be run by cron.
#
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
#
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').#
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
#
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
#
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
#
# For more information see the manual pages of crontab(5) and cron(8)
#
# m h  dom mon dow   command

SHELL=/bin/bash
HOME=/
MAILTO=”jbdomingo76@gmail.com”
0 04 * * * cd /home/ubuntu/GitHub/ring-videos-to-aws-s3/ && /home/ubuntu/GitHub/ring-videos-to-aws-s3/upload-dropbox.py >> /home/ubuntu/GitHub/ring-videos-to-aws-s3/upload.log


</pre>

