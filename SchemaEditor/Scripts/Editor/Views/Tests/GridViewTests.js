﻿Editor.Views.Test = (function (parent) {

    function GridViewTests() {


        var GridView = Editor.Views.GridView; // alias
        var testBenchName = 'test_workbench';
        var testBenchId = "#" + testBenchName;
        var testBenchTag = "div" + testBenchId;
        var paper;

        module("GridView Tests", {
            setup: function () {
                paper = Raphael(testBenchName, 400, 400);
            },
            teardown: function () {
                if (paper) {
                    paper.remove();
                }
            }
        });

        var expected_paths;

        // SVG syntax of paths for normal browser like chrome
        // wall of text
        // modern ide should roll this
        var expected_paths_SVG_syntax = {
            expected_step_5: "M0,0L0,400M5,0L5,400M10,0L10,400M15,0L15,400M20,0L20,400M25,0L25,400M30,0L30,400M35,0L35," +
            "400M40,0L40,400M45,0L45,400M50,0L50,400M55,0L55,400M60,0L60,400M65,0L65,400M70,0L70,400M75,0L75,400M80,0L80," +
            "400M85,0L85,400M90,0L90,400M95,0L95,400M100,0L100,400M105,0L105,400M110,0L110,400M115,0L115,400M120,0L120," +
            "400M125,0L125,400M130,0L130,400M135,0L135,400M140,0L140,400M145,0L145,400M150,0L150,400M155,0L155,400M160," +
            "0L160,400M165,0L165,400M170,0L170,400M175,0L175,400M180,0L180,400M185,0L185,400M190,0L190,400M195,0L195," +
            "400M200,0L200,400M205,0L205,400M210,0L210,400M215,0L215,400M220,0L220,400M225,0L225,400M230,0L230,400M235," +
            "0L235,400M240,0L240,400M245,0L245,400M250,0L250,400M255,0L255,400M260,0L260,400M265,0L265,400M270,0L270," +
            "400M275,0L275,400M280,0L280,400M285,0L285,400M290,0L290,400M295,0L295,400M300,0L300,400M305,0L305,400M310," +
            "0L310,400M315,0L315,400M320,0L320,400M325,0L325,400M330,0L330,400M335,0L335,400M340,0L340,400M345,0L345," +
            "400M350,0L350,400M355,0L355,400M360,0L360,400M365,0L365,400M370,0L370,400M375,0L375,400M380,0L380,400M385," +
            "0L385,400M390,0L390,400M395,0L395,400M400,0L400,400M0,0L400,0M0,5L400,5M0,10L400,10M0,15L400,15M0,20L400," +
            "20M0,25L400,25M0,30L400,30M0,35L400,35M0,40L400,40M0,45L400,45M0,50L400,50M0,55L400,55M0,60L400,60M0,65L400," +
            "65M0,70L400,70M0,75L400,75M0,80L400,80M0,85L400,85M0,90L400,90M0,95L400,95M0,100L400,100M0,105L400,105M0," +
            "110L400,110M0,115L400,115M0,120L400,120M0,125L400,125M0,130L400,130M0,135L400,135M0,140L400,140M0,145L400," +
            "145M0,150L400,150M0,155L400,155M0,160L400,160M0,165L400,165M0,170L400,170M0,175L400,175M0,180L400,180M0," +
            "185L400,185M0,190L400,190M0,195L400,195M0,200L400,200M0,205L400,205M0,210L400,210M0,215L400,215M0,220L400," +
            "220M0,225L400,225M0,230L400,230M0,235L400,235M0,240L400,240M0,245L400,245M0,250L400,250M0,255L400,255M0," +
            "260L400,260M0,265L400,265M0,270L400,270M0,275L400,275M0,280L400,280M0,285L400,285M0,290L400,290M0,295L400," +
            "295M0,300L400,300M0,305L400,305M0,310L400,310M0,315L400,315M0,320L400,320M0,325L400,325M0,330L400,330M0," +
            "335L400,335M0,340L400,340M0,345L400,345M0,350L400,350M0,355L400,355M0,360L400,360M0,365L400,365M0,370L400," +
            "370M0,375L400,375M0,380L400,380M0,385L400,385M0,390L400,390M0,395L400,395M0,400L400,400",

            expected_width_100: "M0,0L0,400M5,0L5,400M10,0L10,400M15,0L15,400M20,0L20,400M25,0L25,400M30,0L30,400M35,0L35," +
            "400M40,0L40,400M45,0L45,400M50,0L50,400M55,0L55,400M60,0L60,400M65,0L65,400M70,0L70,400M75,0L75,400M80,0L80," +
            "400M85,0L85,400M90,0L90,400M95,0L95,400M100,0L100,400M0,0L400,0M0,5L400,5M0,10L400,10M0,15L400,15M0,20L400," +
            "20M0,25L400,25M0,30L400,30M0,35L400,35M0,40L400,40M0,45L400,45M0,50L400,50M0,55L400,55M0,60L400,60M0,65L400," +
            "65M0,70L400,70M0,75L400,75M0,80L400,80M0,85L400,85M0,90L400,90M0,95L400,95M0,100L400,100M0,105L400,105M0," +
            "110L400,110M0,115L400,115M0,120L400,120M0,125L400,125M0,130L400,130M0,135L400,135M0,140L400,140M0,145L400," +
            "145M0,150L400,150M0,155L400,155M0,160L400,160M0,165L400,165M0,170L400,170M0,175L400,175M0,180L400,180M0," +
            "185L400,185M0,190L400,190M0,195L400,195M0,200L400,200M0,205L400,205M0,210L400,210M0,215L400,215M0,220L400," +
            "220M0,225L400,225M0,230L400,230M0,235L400,235M0,240L400,240M0,245L400,245M0,250L400,250M0,255L400,255M0," +
            "260L400,260M0,265L400,265M0,270L400,270M0,275L400,275M0,280L400,280M0,285L400,285M0,290L400,290M0,295L400," +
            "295M0,300L400,300M0,305L400,305M0,310L400,310M0,315L400,315M0,320L400,320M0,325L400,325M0,330L400,330M0," +
            "335L400,335M0,340L400,340M0,345L400,345M0,350L400,350M0,355L400,355M0,360L400,360M0,365L400,365M0,370L400," +
            "370M0,375L400,375M0,380L400,380M0,385L400,385M0,390L400,390M0,395L400,395M0,400L400,400",

            expected_height_100: "M0,0L0,100M5,0L5,100M10,0L10,100M15,0L15,100M20,0L20,100M25,0L25,100M30,0L30,100M35," +
            "0L35,100M40,0L40,100M45,0L45,100M50,0L50,100M55,0L55,100M60,0L60,100M65,0L65,100M70,0L70,100M75,0L75,100M80," +
            "0L80,100M85,0L85,100M90,0L90,100M95,0L95,100M100,0L100,100M0,0L100,0M0,5L100,5M0,10L100,10M0,15L100,15M0," +
            "20L100,20M0,25L100,25M0,30L100,30M0,35L100,35M0,40L100,40M0,45L100,45M0,50L100,50M0,55L100,55M0,60L100,60M0," +
            "65L100,65M0,70L100,70M0,75L100,75M0,80L100,80M0,85L100,85M0,90L100,90M0,95L100,95M0,100L100,100"

        };

        // VML syntax of paths for IE
        // wall of text
        // modern ide should roll this
        var expected_paths_VML_syntax = {
            expected_step_5: "M 0 0 L 0 400 M 5 0 L 5 400 M 10 0 L 10 400 M 15 0 L 15 400 M 20 0 L 20 400 M 25 0 L 25 400 M 30 0 L 30 400 M 35 0 L 35 400 M 40 0 L 40 400 M 45 0 L 45 400 M 50 0 L 50 400 M 55 0 L 55 400 M 60 0 L 60 400 M 65 0 L 65 400 M 70 0 L 70 400 M 75 0 L 75 400 M 80 0 L 80 400 M 85 0 L 85 400 M 90 0 L 90 400 M 95 0 L 95 400 M 100 0 L 100 400 M 105 0 L 105 400 M 110 0 L 110 400 M 115 0 L 115 400 M 120 0 L 120 400 M 125 0 L 125 400 M 130 0 L 130 400 M 135 0 L 135 400 M 140 0 L 140 400 M 145 0 L 145 400 M 150 0 L 150 400 M 155 0 L 155 400 M 160 0 L 160 400 M 165 0 L 165 400 M 170 0 L 170 400 M 175 0 L 175 400 M 180 0 L 180 400 M 185 0 L 185 400 M 190 0 L 190 400 M 195 0 L 195 400 M 200 0 L 200 400 M 205 0 L 205 400 M 210 0 L 210 400 M 215 0 L 215 400 M 220 0 L 220 400 M 225 0 L 225 400 M 230 0 L 230 400 M 235 0 L 235 400 M 240 0 L 240 400 M 245 0 L 245 400 M 250 0 L 250 400 M 255 0 L 255 400 M 260 0 L 260 400 M 265 0 L 265 400 M 270 0 L 270 400 M 275 0 L 275 400 M 280 0 L 280 400 M 285 0 L 285 400 M 290 0 L 290 400 M 295 0 L 295 400 M 300 0 L 300 400 M 305 0 L 305 400 M 310 0 L 310 400 M 315 0 L 315 400 M 320 0 L 320 400 M 325 0 L 325 400 M 330 0 L 330 400 M 335 0 L 335 400 M 340 0 L 340 400 M 345 0 L 345 400 M 350 0 L 350 400 M 355 0 L 355 400 M 360 0 L 360 400 M 365 0 L 365 400 M 370 0 L 370 400 M 375 0 L 375 400 M 380 0 L 380 400 M 385 0 L 385 400 M 390 0 L 390 400 M 395 0 L 395 400 M 400 0 L 400 400 M 0 0 L 400 0 M 0 5 L 400 5 M 0 10 L 400 10 M 0 15 L 400 15 M 0 20 L 400 20 M 0 25 L 400 25 M 0 30 L 400 30 M 0 35 L 400 35 M 0 40 L 400 40 M 0 45 L 400 45 M 0 50 L 400 50 M 0 55 L 400 55 M 0 60 L 400 60 M 0 65 L 400 65 M 0 70 L 400 70 M 0 75 L 400 75 M 0 80 L 400 80 M 0 85 L 400 85 M 0 90 L 400 90 M 0 95 L 400 95 M 0 100 L 400 100 M 0 105 L 400 105 M 0 110 L 400 110 M 0 115 L 400 115 M 0 120 L 400 120 M 0 125 L 400 125 M 0 130 L 400 130 M 0 135 L 400 135 M 0 140 L 400 140 M 0 145 L 400 145 M 0 150 L 400 150 M 0 155 L 400 155 M 0 160 L 400 160 M 0 165 L 400 165 M 0 170 L 400 170 M 0 175 L 400 175 M 0 180 L 400 180 M 0 185 L 400 185 M 0 190 L 400 190 M 0 195 L 400 195 M 0 200 L 400 200 M 0 205 L 400 205 M 0 210 L 400 210 M 0 215 L 400 215 M 0 220 L 400 220 M 0 225 L 400 225 M 0 230 L 400 230 M 0 235 L 400 235 M 0 240 L 400 240 M 0 245 L 400 245 M 0 250 L 400 250 M 0 255 L 400 255 M 0 260 L 400 260 M 0 265 L 400 265 M 0 270 L 400 270 M 0 275 L 400 275 M 0 280 L 400 280 M 0 285 L 400 285 M 0 290 L 400 290 M 0 295 L 400 295 M 0 300 L 400 300 M 0 305 L 400 305 M 0 310 L 400 310 M 0 315 L 400 315 M 0 320 L 400 320 M 0 325 L 400 325 M 0 330 L 400 330 M 0 335 L 400 335 M 0 340 L 400 340 M 0 345 L 400 345 M 0 350 L 400 350 M 0 355 L 400 355 M 0 360 L 400 360 M 0 365 L 400 365 M 0 370 L 400 370 M 0 375 L 400 375 M 0 380 L 400 380 M 0 385 L 400 385 M 0 390 L 400 390 M 0 395 L 400 395 M 0 400 L 400 400",
            expected_width_100: "M 0 0 L 0 400 M 5 0 L 5 400 M 10 0 L 10 400 M 15 0 L 15 400 M 20 0 L 20 400 M 25 0 L 25 400 M 30 0 L 30 400 M 35 0 L 35 400 M 40 0 L 40 400 M 45 0 L 45 400 M 50 0 L 50 400 M 55 0 L 55 400 M 60 0 L 60 400 M 65 0 L 65 400 M 70 0 L 70 400 M 75 0 L 75 400 M 80 0 L 80 400 M 85 0 L 85 400 M 90 0 L 90 400 M 95 0 L 95 400 M 100 0 L 100 400 M 0 0 L 400 0 M 0 5 L 400 5 M 0 10 L 400 10 M 0 15 L 400 15 M 0 20 L 400 20 M 0 25 L 400 25 M 0 30 L 400 30 M 0 35 L 400 35 M 0 40 L 400 40 M 0 45 L 400 45 M 0 50 L 400 50 M 0 55 L 400 55 M 0 60 L 400 60 M 0 65 L 400 65 M 0 70 L 400 70 M 0 75 L 400 75 M 0 80 L 400 80 M 0 85 L 400 85 M 0 90 L 400 90 M 0 95 L 400 95 M 0 100 L 400 100 M 0 105 L 400 105 M 0 110 L 400 110 M 0 115 L 400 115 M 0 120 L 400 120 M 0 125 L 400 125 M 0 130 L 400 130 M 0 135 L 400 135 M 0 140 L 400 140 M 0 145 L 400 145 M 0 150 L 400 150 M 0 155 L 400 155 M 0 160 L 400 160 M 0 165 L 400 165 M 0 170 L 400 170 M 0 175 L 400 175 M 0 180 L 400 180 M 0 185 L 400 185 M 0 190 L 400 190 M 0 195 L 400 195 M 0 200 L 400 200 M 0 205 L 400 205 M 0 210 L 400 210 M 0 215 L 400 215 M 0 220 L 400 220 M 0 225 L 400 225 M 0 230 L 400 230 M 0 235 L 400 235 M 0 240 L 400 240 M 0 245 L 400 245 M 0 250 L 400 250 M 0 255 L 400 255 M 0 260 L 400 260 M 0 265 L 400 265 M 0 270 L 400 270 M 0 275 L 400 275 M 0 280 L 400 280 M 0 285 L 400 285 M 0 290 L 400 290 M 0 295 L 400 295 M 0 300 L 400 300 M 0 305 L 400 305 M 0 310 L 400 310 M 0 315 L 400 315 M 0 320 L 400 320 M 0 325 L 400 325 M 0 330 L 400 330 M 0 335 L 400 335 M 0 340 L 400 340 M 0 345 L 400 345 M 0 350 L 400 350 M 0 355 L 400 355 M 0 360 L 400 360 M 0 365 L 400 365 M 0 370 L 400 370 M 0 375 L 400 375 M 0 380 L 400 380 M 0 385 L 400 385 M 0 390 L 400 390 M 0 395 L 400 395 M 0 400 L 400 400",
            expected_height_100: "M 0 0 L 0 100 M 5 0 L 5 100 M 10 0 L 10 100 M 15 0 L 15 100 M 20 0 L 20 100 M 25 0 L 25 100 M 30 0 L 30 100 M 35 0 L 35 100 M 40 0 L 40 100 M 45 0 L 45 100 M 50 0 L 50 100 M 55 0 L 55 100 M 60 0 L 60 100 M 65 0 L 65 100 M 70 0 L 70 100 M 75 0 L 75 100 M 80 0 L 80 100 M 85 0 L 85 100 M 90 0 L 90 100 M 95 0 L 95 100 M 100 0 L 100 100 M 0 0 L 100 0 M 0 5 L 100 5 M 0 10 L 100 10 M 0 15 L 100 15 M 0 20 L 100 20 M 0 25 L 100 25 M 0 30 L 100 30 M 0 35 L 100 35 M 0 40 L 100 40 M 0 45 L 100 45 M 0 50 L 100 50 M 0 55 L 100 55 M 0 60 L 100 60 M 0 65 L 100 65 M 0 70 L 100 70 M 0 75 L 100 75 M 0 80 L 100 80 M 0 85 L 100 85 M 0 90 L 100 90 M 0 95 L 100 95 M 0 100 L 100 100" 
        };

        // set expected string for IE
        if ($.browser.msie) {
            expected_paths = expected_paths_VML_syntax;
        }
        // set expected for other browsers
        else {
            expected_paths = expected_paths_SVG_syntax;
        }

        test("grid constructor test", function () {
            var grid = new GridView({ step: 5, width: 400, height: 400 });
            grid.renderTo(paper);

            equal($(testBenchTag + " svg path#grid").length, 1, "test grid quantity==0 ");
            equal($(testBenchTag + " svg path#grid").attr('d'), expected_paths.expected_step_5, "test grid path params");

        });

        test("grid set test", function () {
            var grid = new GridView({ step: 20, width: 400, height: 400 });
            grid.renderTo(paper);

            grid.set({ step: 5 });
            equal($(testBenchTag + " svg path#grid").attr('d'), expected_paths.expected_step_5, "test grid set step");

            grid.set({ width: 100 });
            equal($(testBenchTag + " path#grid").attr('d'), expected_paths.expected_width_100, "test grid set width");

            grid.set({ height: 100 });
            equal($(testBenchTag + " path#grid").attr('d'), expected_paths.expected_height_100, "test grid set height");

            grid.set({ color: 'green' });
            equal($(testBenchTag + " path#grid").attr('stroke'), '#008000', "test grid set color");

            grid.set({ opacity: 0.1 });
            equal($(testBenchTag + " path#grid").attr('stroke-opacity'), '0.1', "test grid set opacity");

            grid.set({ line_thickness: 0.1 });
            equal($(testBenchTag + " path#grid").attr('stroke-width'), '0.1', "test grid set line thickness");

        });

    };
    parent.GridViewTests = GridViewTests;
    return parent;

} (Editor.Views.Test || {}));