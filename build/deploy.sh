# 自动部署脚本  

# 构建
npm run build:lib
# 导航到构建输出目录
cd docs

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的 master 分支
git push -f github.com/1baoxiaobowfj/supple-ui-components.git master:gh-pages
