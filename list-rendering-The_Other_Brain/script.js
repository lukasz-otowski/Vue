var data = {
    items: [
        {
            name: 'Foreword',
            page: 7,
            checked: true,
            part: false
        },
        {
            name: 'Thanks',
            page: 9,
            checked: true,
            part: false
        },
        {
            name: 'Part I - Discover second mind',
            page: 11,
            checked: true,
            part: 'part'
        },
        {
            name: 'Chapter 1 - Bubble foil or shiny glue?',
            page: 13,
            checked: true,
            part: 'chapter'
        },
        {
            name: "Einstein's brain",
            page: 13,
            checked: true,
            part: 'subchapter'
        },
        {
            name: "Intellectual white spot: glial cells hidden in the light of the jupiter",
            page: 18,
            checked: true,
            part: 'subchapter'
        },
        {
            name: "Glial cells are listening: a beam of light to the mystery of Ramón y Cajal",
            page: 22,
            checked: true,
            part: 'subchapter'
        },
        {
            name: "Revelations from the depths",
            page: 24,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Chapter 2 - Looking deep into the brain: cellular structure of the brain.',
            page: 28,
            checked: true,
            part: 'chapter'
        },
        {
            name: 'The brain section',
            page: 28,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Grey matter',
            page: 29,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'White matter',
            page: 30,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Neurons: user\'s manual - how the brain works.',
            page: 31,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Cell elements of second brain.',
            page: 36,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Schwann cells',
            page: 38,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Sailor of the mind - Fridtjof Nansen',
            page: 41,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Oligodendrocytes: octopus garden',
            page: 47,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Astrocytes: cellular stars and a mysterious disease',
            page: 50,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'The magic of myelin',
            page: 53,
            checked: true,
            part: 'subchapter'
        },
        {
            name: 'Cells of microglia: the army of the mind',
            page: 57,
            checked: false,
            part: 'subchapter'
        },
        {
            name: 'Astrocytes - a source of brain energy',
            page: 61,
            checked: false,
            part: 'subchapter'
        },
        {
            name: 'Potassium rechargeable battery',
            page: 61,
            checked: false,
            part: 'subchapter'
        },
        {
            name: 'Chapter 3 - Transmission from the second brain: glial cells know and control your mind',
            page: 65,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Part II - Glial cells in health and disease',
            page: 81,
            checked: false,
            part: 'part'
        },
        {
            name: 'Chapter 4 - Brain tumor: almost nothing to do with neurons',
            page: 87,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 5 - Injuries of the brain and spinal cord',
            page: 100,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 6 - Neuroinfection',
            page: 131,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 7 - Mental health: glial cells, silent complicit of mental illness',
            page: 160,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 8 - Neurodegenerative diseases',
            page: 193,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 9 - Glial cells and pain: blessing and curse',
            page: 218,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 10 - Glial cells and addiction',
            page: 238,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 11 - Mother and child',
            page: 248,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 12 - Aging: Glia cells are furiously fighting with fading light',
            page: 276,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Part III - Glial cells in mind and memory',
            page: 291,
            checked: false,
            part: 'part'
        },
        {
            name: 'Chapter 13 - The mind of the other brain: glial cells control the conscious and unconscious mind',
            page: 293,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 14 - Memory and brain power over neurons',
            page: 314,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 15 - Thinking over synapses',
            page: 327,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Chapter 16 - Towards the future: a new brain',
            page: 355,
            checked: false,
            part: 'chapter'
        },
        {
            name: 'Index',
            page: 413,
            checked: false,
            part: ''
        }
    ],
    //data to for temporary storage
    title: 'The Other Brain By R. Douglas Fields',
    newItem: '',
    newItemClass: '',
    picked: 'none',
    page: ''
};

new Vue({
    el: '#app',
    data: data,
    methods: {
        //method to add new item
        addItem: function () {
            var name;

            name = this.newItem.trim();
            if (name) {
                this.items.push({
                    name: name,
                    checked: false,
                    part: this.picked,
                    page: this.page
                });
                this.newItem = '';
                this.newItemClass = '';
                this.page = '';

            }
        },
        removeItem: function (key) {
            data.items.splice(key, 1);
            
        }
    }
});
