export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}

export class SurveillanceController {
    constructor(private sensor: MotionSensor, private videoRecorder: VideoRecorder) {}

    recordMotion(numberOfSeconds: number = 1) {
        for(let i = 1; i <= numberOfSeconds; i++) {
            this.tryToRecordMotion();
            this.waitOneSecond();
        }
    }

    private tryToRecordMotion() {
        try {
            this.sensor.isDetectingMotion() ? this.videoRecorder.startRecording() : this.videoRecorder.stopRecording();
        } catch (error) {
            this.videoRecorder.stopRecording();
        }
    }

    private waitOneSecond() {
        const aSecond = 1000;
        let startTime = new Date().getTime();
        const endTime = startTime + aSecond;
        while (startTime < endTime) {
            startTime = new Date().getTime();
        }
    }
}