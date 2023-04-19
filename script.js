let list = document.querySelectorAll('li');

        let n = list.length;
        let ans;
        for(let i=0;i<n;i++){
            if(list[i].id=='level')
            ans = i;
        }

ans++;
        alert('The level of the element is: '+ ans);