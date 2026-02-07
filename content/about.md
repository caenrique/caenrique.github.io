+++
title = "About"
description = "my resume"
path = "about"
+++


<style>
.about {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 1rem;

  @media (max-width: 770px) {
    flex-direction: column;
  }
}
.image {
  flex-grow: 1;
  @media (max-width: 770px) {
    max-width: 350px;
  }
}
.text {
  flex-grow: 2;
}
</style>

<div class="about">

  <div class="image col">
    {{ image(path="images/headshot.jpg", alt="picture of me", style="border-radius: 50%; width: 50rem;" ) }}
  </div>

  <div class="text col">

  **Staff Software Engineer** at [Xebia](https://es.linkedin.com/company/xebia)

  I'm a Software Engineer focused on functional programming, high-throughput backends, and tooling.

  Scala is my main language, and I enjoy working with the Typelevel ecosystem. I'm currently learning Rust.

  I've built systems across streaming, data pipelines, and recommendation platforms, always aiming for clean, reliable, and scalable solutions.

  You can check my full CV here: [caenrique.github.io/cv](https://caenrique.github.io/cv)

  </div>

</div>
