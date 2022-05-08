FROM node:14

# RUN mkdir class_build 굳이 안해도 COPY하면 자동으로 폴더생성
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
# CMD yarn start 해도 되는데 CMD는 한 번 만 사용 가능하다.
# 하나의 최적화된 파일(이미지)로 압축할 때 실행 명령어는 RUN에 사용할 수 없고 CMD에 사용해야한다.
