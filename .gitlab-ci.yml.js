image: publysher/demi

pages:
  script:
  - deptest
  artifacts:
    paths:
    - dist
  only:
  - develop