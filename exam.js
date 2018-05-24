hello , that is a new text file!
see , i change this?

git log 查看commit历史  --pretty=oneline稍微格式化格式 

git reflog 查看操作历史，后悔药

git reset --hard HEAD [^/~] ^个数代表回退版本数/~接数字代表回退版本数

## diff命令 查看工作区与版本库最新版本的区别

## git checkout [-- fileName || .] 撤销工作区指定文件\所有修改

## git reset HEAD file 撤销暂存区的文件（未推送到远程库）

## git rm 用于删除文件

##首次使用git，设置用户名和密码

git config --global user.name "yourname"
git config --global user.email "your@email.com"

1.clone项目:
使用ssh方式时，首先你必须是该项目的管理者或拥有者，并且需要配置个人的ssh key 。 而对于使用https方式来讲，就没有这些要求。

2.push:

在使用ssh方式时，是不需要验证用户名和密码，如果你在配置ssh key 时设置了密码，则需要验证密码。

而对于使用https方式来讲，每次push都需要验证用户名和密码。

## 

git push origin <name> 推送到远程分支，没有则创建并推送

git push origin --delete <branchName>删除远程分支

##now i'm create a bug feature, and then i will merge it and delete it.

## now stash a key, and then recover it

git stash apply stash@{xx} 回复某个工作现场
git stash clear 清空stash
git stash pop 恢复第一个stash并删除它