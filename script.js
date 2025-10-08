
    const Student = document.getElementById('student');
    const result = document.getElementById('result');
    Student.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var section = document.getElementById('section').value;
      var english = Number(document.getElementById('english').value);
      var tamil = Number(document.getElementById('tamil').value);
      var maths = Number(document.getElementById('maths').value);
      var science = Number(document.getElementById('science').value);
      var social = Number(document.getElementById('social').value);
      var Total = english + tamil + maths + science + social;
      document.getElementById('total').value = Total;

      result.innerHTML += `Student name is ${name} <br>Section: ${section} <br>English: ${english} <br>Tamil: ${tamil} <br>Maths: ${maths} <br>Science: ${science} <br>Social: ${social} <br><b>Grand Total: ${Total}</b><hr>`;
    });

