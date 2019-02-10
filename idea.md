sarでとってこれる情報量がすごいので取捨選択が必要www

- CPU usage
- Memory usage
- Paging info
- IO
- FileSystem
- Network
- power

-bBdFHqrRSuvwWy
-I SUM -I XALL -m ALL -n ALL -u ALL -P ALL


とりあえず

- CPU usage(-P ALL)
  - per
  - all
- Memory
	kbmemfree
	kbmemused
	%memused
	kbbuffers
	kbcached
	kbcommit
	%commit
	kbactive
	kbinact
	kbdirty
- IO
- NetWork

file read => parse => js object
                   => indexedbに保存

- FileParser(json) => js object
- GraphParse(js object) => js object
- DataStore
  - save
  - delete



```
sar -o sar.out 5 4 >/dev/null

# binaryで出力
sar -P ALL -0 sar.out 5 4

# binaryをjsonで出力
sadf -T -j -- sar.out >sadf.txt
```
https://qiita.com/hana_shin/items/4aeca4c52493bfe2832c

- fileをdrop
- fileを読み込みメモリに展開=>非同期
- メモリに展開されたファイルをparseしてobjectにする=>worker
  - このojbectでグラフを描画する
  - このobjectをdbに保存する=>非同期
  - dbからfetchして描画する


- state
  - mode: [upload, history, graph]
  - graphId: xxxx


優先度低いTODO
- 期待したjsonの形でないときや、そもそもファイル形式が違うときどうするのか
- indexedbがnodejsだとアクセスできなくてテストがwarn吐いてる

# table style

- 全体
  - 真ん中によせる
- 詳細
  - 文字を大きく
  - 文字の色
  - 文字の左よせ
  - onhover
