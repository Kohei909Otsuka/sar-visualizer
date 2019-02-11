This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Purpose of sar-visualizer

When we wanna monitoring remote sever, we have basically two options.

1. use monitoring software like Zabbix, Mackrel, ELK stack, TCK stack
2. use command line tools like `sar`

First option is too much for simple investigation, while second is too simple.

This `sar-visualizer` will help you to see metrics by `sar` in time series graph.

# Usage

1. get sar output json file
2. upload the json file to [app](https://kohei909otsuka.github.io/sar-visualizer/)

## 1. get sar output json file

`sar` and `sadf` are included in Linux `sysstat` package

``` sh
# modify sar's binary output to json file(only CPU, Memory metrics)
sadf -T -j -- -u ALL -r  /var/log/sa/sa10 > test.json
```

## 2. upload it to [app](https://kohei909otsuka.github.io/sar-visualizer/)

Visit to [app](https://kohei909otsuka.github.io/sar-visualizer/), then upload json file you got,
which will automatically render graphs.

# Note

Currently sar-visualizer render graphs for anly CPU and Memory metrics(`-u ALL`, `-r` option in `sar`).
Even if you upload json which has other metrics, they will be ignored.
