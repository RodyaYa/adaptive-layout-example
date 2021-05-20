const toHTML = (course) => {
  const { lessons, tasks, minutes } = course.features;
  const { avatar, name } = course.author;
  return `
    <div class="row">
        <div class="catalog__card">
          <div class="card__inner">
            <div class="card__bg_image" style="background-image: url('${course.bgPicture}')">
            <div class="fader"></div>
            <div class='progressBar' style="width:${course.progress}%;">
              <div class='progressBar__before'>Progress ${course.progress}%</div>
            </div>
            </div>
            <div class="card__body">
              <div class="card__user">
                <div class="user__avatar">
                  <img src="${avatar}" alt="user avatar" />
                </div>
                <div class="user__name">${name}</div>
              </div>
              <div class="card__title">
                ${course.title}
              </div>
              <div class="card__features">
                <div class="features__item lessons">${lessons} lessons</div>
                <div class="features__item tasks">${tasks} tasks</div>
                <div class="features__item minutes">${minutes} minutes</div>
              </div>
              <div class="card__buttons">
                <div class="btn btn_bordered">Continue</div>
                <div class="btn">More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
};

function render() {
  const html = coursesArr.map(toHTML).join("");
  document.querySelector("#courses").innerHTML = html;
}
render();
