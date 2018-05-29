function createGraph() {
    return {
        vertexRadius: 3,
        showWeights: false,
        djkstraPath: undefined,
        timePath: undefined,
        vertices: [
            { x: 20, y: 20 },
            { x: 75, y: 40 },
            { x: 40, y: 100 },
            { x: 130, y: 100 },
            { x: 250, y: 30 },
            { x: 95,  y: 200 }, // 5
            { x: 158, y: 39 },
            { x: 228, y: 72 },
            { x: 187, y: 105 },
            { x: 32, y: 154 },
            { x: 24, y: 212 },
            { x: 72, y: 249 },
            { x: 83, y: 318 },
            { x: 177, y: 168 },
            { x: 250, y: 130 },
            { x: 323, y: 69 },
            { x: 322, y: 200 },
            { x: 34, y: 295 }, // 10
            { x: 154, y: 255 },
            { x: 212, y: 306 },
            { x: 114, y: 348 },
            { x: 403, y: 62 },
            { x: 420, y: 149 },
            { x: 378, y: 246 },
            { x: 437, y: 226 },
            { x: 420, y: 286 },
            { x: 221, y: 233 },
            { x: 287, y: 230 },
            { x: 276, y: 300 },
            { x: 359, y: 316 },
            { x: 476, y: 266 },
            { x: 514, y: 88 },
            { x: 545, y: 171 },
            { x: 668, y: 120 },
            { x: 618, y: 35 },
            { x: 766, y: 28 },
            { x: 826, y: 148 },
            { x: 731, y: 223 },
            { x: 837, y: 296 },
            { x: 775, y: 325 }, // 28
            { x: 52, y: 396 },
            { x: 103, y: 482 },
            { x: 60, y: 568 },
            { x: 42, y: 646 },
            { x: 119, y: 601 },
            { x: 144, y: 645 },
            { x: 232, y: 579 },
            { x: 181, y: 515 },
            { x: 279, y: 499 },
            { x: 476, y: 33 },
            { x: 555, y: 17 },
            { x: 581, y: 79 },
            { x: 607, y: 155 },
            { x: 710, y: 168 },
            { x: 643, y: 224 },
            { x: 788, y: 75 },
            { x: 704, y: 53 },
            { x: 837, y: 35 },
            { x: 876, y: 86 },
            { x: 824, y: 101 },
            { x: 875, y: 195 },
            { x: 794, y: 224 },
            { x: 878, y: 244 },
            { x: 716, y: 304 },
            { x: 190, y: 424 },
            { x: 309, y: 364 },
            { x: 363, y: 449 },
            { x: 320, y: 570 },
            { x: 412, y: 623 },
            { x: 452, y: 536 },
            { x: 473, y: 430 },
            { x: 429, y: 368 },
            { x: 605, y: 334 },
            { x: 546, y: 348 },
            { x: 661, y: 273 },
            { x: 721, y: 399 },
            { x: 581, y: 416 },
            { x: 491, y: 511 },
            { x: 375, y: 525 },
            { x: 286, y: 639 },
            { x: 489, y: 647 },
            { x: 572, y: 515 },
            { x: 679, y: 583 },
            { x: 659, y: 645 },
            { x: 800, y: 560 },
            { x: 770, y: 496 },
            { x: 699, y: 471 },
            { x: 655, y: 426 },
            { x: 692, y: 366 },
            { x: 863, y: 642 },
            { x: 706, y: 533 },
            { x: 608, y: 615 },
            { x: 770, y: 624 },
            { x: 826, y: 481 },
            { x: 768, y: 440 },
            { x: 869, y: 394 },
            { x: 535, y: 576 },
            { x: 626, y: 493 },
            { x: 862, y: 577 },
            { x: 581, y: 260 }
        ],
        nodes: [
            { start: 0, end: 1 }, // 0
            { start: 0, end: 2 },
            { start: 1, end: 2 }, // 1
            { start: 1, end: 3 },
            { start: 1, end: 6 },
            { start: 2, end: 9 }, // 2
            { start: 2, end: 5 },
            { start: 3, end: 5 }, // 3
            { start: 3, end: 7 },
            { start: 3, end: 8 },
            { start: 3, end: 13 },
            { start: 4, end: 6 }, // 4
            { start: 4, end: 7 },
            { start: 4, end: 15 },
            { start: 4, end: 49 },
            { start: 5, end: 10 }, // 5
            { start: 5, end: 11 },
            { start: 5, end: 18 },
            { start: 5, end: 26 },
            { start: 7, end: 8 }, // 7
            { start: 7, end: 14 },
            { start: 7, end: 15 },
            { start: 9, end: 10 }, // 9
            { start: 10, end: 11 }, // 10
            { start: 11, end: 18 }, // 11
            { start: 12, end: 17 }, // 12
            { start: 12, end: 20 },
            { start: 13, end: 14 }, // 13
            { start: 13, end: 26 },
            { start: 15, end: 21 }, // 15
            { start: 16, end: 22 }, // 16
            { start: 16, end: 23 },
            { start: 16, end: 26 },
            { start: 16, end: 27 },
            { start: 17, end: 40 }, // 17
            { start: 18, end: 19 }, // 18
            { start: 18, end: 26 },
            { start: 19, end: 28 }, // 19
            { start: 20, end: 40 }, // 20
            { start: 20, end: 64 },
            { start: 21, end: 22 }, // 21
            { start: 21, end: 31 },
            { start: 22, end: 32 }, // 22
            { start: 23, end: 24 }, // 23
            { start: 23, end: 25 },
            { start: 24, end: 30 }, // 24
            { start: 24, end: 32 },
            { start: 25, end: 29 }, // 25
            { start: 25, end: 30 },
            { start: 26, end: 27 }, // 26
            { start: 26, end: 28 },
            { start: 28, end: 29 }, // 28
            { start: 28, end: 65 },
            { start: 29, end: 65 }, // 29
            { start: 29, end: 71, speed: 1 },
            { start: 30, end: 99 }, // 30
            { start: 31, end: 32 }, // 31
            { start: 31, end: 49 },
            { start: 31, end: 51 },
            { start: 32, end: 99 }, // 32
            { start: 33, end: 51 }, // 33
            { start: 33, end: 52 },
            { start: 33, end: 53 },
            { start: 33, end: 55 },
            { start: 34, end: 50 }, // 34
            { start: 34, end: 51 },
            { start: 34, end: 56 },
            { start: 35, end: 55 }, // 35
            { start: 35, end: 56 },
            { start: 35, end: 57 },
            { start: 36, end: 53 }, // 36
            { start: 36, end: 59 },
            { start: 36, end: 60 },
            { start: 36, end: 61 },
            { start: 37, end: 53 }, // 37
            { start: 37, end: 54 },
            { start: 37, end: 61 },
            { start: 38, end: 39 }, // 38
            { start: 38, end: 61 },
            { start: 38, end: 62 },
            { start: 38, end: 95 },
            { start: 40, end: 41 }, // 40
            { start: 41, end: 42 }, // 41
            { start: 41, end: 47 },
            { start: 41, end: 64 },
            { start: 42, end: 43 }, // 42
            { start: 42, end: 44 },
            { start: 42, end: 47 },
            { start: 43, end: 45 }, // 43
            { start: 44, end: 45 }, // 44
            { start: 44, end: 46 },
            { start: 45, end: 79 }, // 45
            { start: 46, end: 47 }, // 46
            { start: 46, end: 67 },
            { start: 46, end: 79 },
            { start: 47, end: 48 }, // 47
            { start: 47, end: 64 },
            { start: 48, end: 64 }, // 48
            { start: 48, end: 67 },
            { start: 48, end: 78 },
            { start: 50, end: 51 }, // 50
            { start: 51, end: 52 }, // 51
            { start: 52, end: 54 }, // 52
            { start: 53, end: 54 }, // 53
            { start: 54, end: 74 }, // 54
            { start: 55, end: 56 }, // 55
            { start: 55, end: 58 },
            { start: 55, end: 59 },
            { start: 57, end: 58 }, // 57
            { start: 58, end: 59 }, // 58
            { start: 58, end: 60 },
            { start: 60, end: 62 }, // 60
            { start: 63, end: 39 }, // 63
            { start: 63, end: 72 },
            { start: 63, end: 74 },
            { start: 63, end: 88 },
            { start: 66, end: 70 }, // 66
            { start: 66, end: 78 },
            { start: 67, end: 68 }, // 67
            { start: 67, end: 79 },
            { start: 68, end: 69 }, // 68
            { start: 68, end: 78 },
            { start: 68, end: 80 },
            { start: 69, end: 77 }, // 69
            { start: 69, end: 78 },
            { start: 69, end: 96 },
            { start: 70, end: 71 }, // 70
            { start: 70, end: 76 },
            { start: 70, end: 77 },
            { start: 71, end: 73 }, // 71
            { start: 72, end: 73 }, // 72
            { start: 72, end: 88 },
            { start: 73, end: 76 }, // 76
            { start: 75, end: 87 }, // 75
            { start: 75, end: 88 },
            { start: 75, end: 94 },
            { start: 75, end: 95 },
            { start: 76, end: 87 }, // 76
            { start: 76, end: 97 },
            { start: 77, end: 81 }, // 77
            { start: 80, end: 83 }, // 80
            { start: 80, end: 96 },
            { start: 81, end: 82 }, // 81
            { start: 81, end: 96 },
            { start: 81, end: 97 },
            { start: 82, end: 90 }, // 82
            { start: 82, end: 91 },
            { start: 82, end: 92 },
            { start: 83, end: 91 }, // 83
            { start: 83, end: 92 },
            { start: 84, end: 85 }, // 84
            { start: 84, end: 90 },
            { start: 84, end: 92 },
            { start: 84, end: 98 },
            { start: 85, end: 86 }, // 85
            { start: 85, end: 93 },
            { start: 86, end: 87 }, // 86
            { start: 86, end: 94 },
            { start: 86, end: 97 },
            { start: 89, end: 92 }, // 89
            { start: 89, end: 98 },
            { start: 90, end: 85 }, // 90
            { start: 90, end: 97 },
            { start: 91, end: 96 }, // 91
            { start: 93, end: 94 }, // 93
            { start: 93, end: 95 },
            { start: 93, end: 98 },
        ]
    }
}
